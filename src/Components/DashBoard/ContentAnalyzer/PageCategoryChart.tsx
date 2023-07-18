import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useAppSelector } from "../../../utils/stateManagement/store";

const PageCategoryChart = () => {
	const readSummary = useAppSelector((state) => state.ContentSummaryData);

	const chartRef = useRef<am4charts.XYChart>();

	// Create chart instance

	useEffect(() => {
		const chart = am4core.create("chartdiv", am4charts.XYChart);

		const chartData = readSummary?.result[0]?.top_domains;

		// Set chart data
		chart.data = chartData;

		// Create a new value axis for the Y-axis
		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

		// Create a new category axis for the X-axis
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "domain";
		chart.logo.disabled = true;

		// Create a new column series and set its data fields
		var columnSeries = chart.series.push(new am4charts.ColumnSeries());
		columnSeries.dataFields.valueY = "count";
		columnSeries.dataFields.categoryX = "domain";

		// Create a new line series and set its data fields
		var lineSeries = chart.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.valueY = "count";
		lineSeries.dataFields.categoryX = "domain";

		// Set the stroke and fill colors for the line series
		lineSeries.stroke = am4core.color("#FFA500");
		lineSeries.fill = am4core.color("#FFA500");

		// Add a chart cursor
		chart.cursor = new am4charts.XYCursor();
		am4core.useTheme(am4themes_animated);
		// Add a scrollbar
		chart.scrollbarX = new am4core.Scrollbar();

		// Add legend
		chart.legend = new am4charts.Legend();

		// Assign chart instance to the ref
		chartRef.current = chart;

		// Clean up on unmount
		return () => {
			chart.dispose();
		};
	}, [readSummary]);

	return (
		<Container>
			<Wrapper>
				<Title>Top_Domain</Title>
				<div id='chartdiv' style={{ height: "100%", width: "100%" }}></div>
			</Wrapper>
		</Container>
	);
};

export default PageCategoryChart;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
const Wrapper = styled.div`
	min-height: 400px;
	width: 95%;
	background-color: #fff;
	margin: 20px 0;
	padding-bottom: 40px;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;
