import React, { useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import { select, min, max, area, scaleLinear } from "d3";

const makeChart = ({ data, width, height, element, className }) => {
  const margin = 2;
  const svg = select(element)
    .append("svg")
    .attr("width", width - 2 * margin)
    .attr("height", height)
    .attr("class", className)
    .append("g")
    .attr("transform", "translate(" + -margin + ",0)");

  const x = scaleLinear().domain([0, data.length]).range([0, width]);
  const y = scaleLinear()
    .domain([min(data), max(data)])
    .range([height, 0]);

  svg
    .append("path")
    .datum(data)
    .attr(
      "d",
      area()
        .x((d, i) => x(i))
        .y0(y(0))
        .y1((d, i) => y(d))
    );
};

const useStyles = createUseStyles({
  sparkline: {
    fill: "#ecf5fd",
    stroke: "#2d79c5",
    strokeWidth: 1,
    margin: "0 10px",
  },
});

export default function SparkLine(props) {
  const cls = useStyles();
  const ref = useRef(null);
  const { data, width, height, className } = props;

  useEffect(() => {
    makeChart({
      data: data || [],
      width: width || 135,
      height: height || 50,
      element: ref.current,
      className: cls.sparkline,
    });
  }, [ref]);

  return <div className={className} ref={ref}></div>;
}
