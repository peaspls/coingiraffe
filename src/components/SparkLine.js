import React, { useEffect, useRef } from 'react';
import { select, min, max, area, scaleLinear } from "d3";
import './SparkLine.scss';

const makeChart = ({ data, width, height, element }) => {
  const margin = 2;
  const svg = select(element)
    .append('svg')
    .attr('width', width - 2 * margin)
    .attr('height', height)
    .attr('class', 'sparkline')
    .append("g")
    .attr("transform", "translate(" + (-margin) + ",0)");

  const x = scaleLinear().domain([0, data.length]).range([0, width]);
  const y = scaleLinear().domain([min(data), max(data)]).range([height, 0]);    

  svg.append('path')
    .datum(data)
    .attr('d', area()
      .x((d, i) => x(i))
      .y0(y(0))
      .y1((d, i) => y(d))
    );
};

const SparkLine = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    makeChart({
      data: props.data || [],
      width: props.width || 135,
      height: props.height || 50,
      element: ref.current      
    });
  }, [ref]);
  
  return (
    <div ref={ref}></div>
  );
};

export default SparkLine;