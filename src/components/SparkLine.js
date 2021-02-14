import React, { useEffect, useRef } from 'react';
import { select, min, max, line, scaleLinear } from "d3";
import './SparkLine.scss';

const makeChart = ({ data, width, height, parent }) => {
  const x = scaleLinear()
    .domain([0, data.length])
    .range([0, width]);
  
  const y = scaleLinear()
    .domain([min(data), max(data)])
    .range([height, 0]);    
  
  const svg = select(parent)
    .append('svg:svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'sparkline');

  const curve = line()
    .x((d, i) => x(i))
    .y((d, i) => y(d));

  svg.append('svg:path')
    .attr('d', curve(data));
};

const SparkLine = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    makeChart({
      data: props.data || [],
      width: props.width || 135,
      height: props.height || 50,
      parent: ref.current      
    });
  }, [ref]);
  
  return (
    <div className="sparkline-container" ref={ref}></div>
  );
};

export default SparkLine;