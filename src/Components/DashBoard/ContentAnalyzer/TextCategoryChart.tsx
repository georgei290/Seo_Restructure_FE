import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useAppSelector } from "../../../utils/stateManagement/store";

const TextCategoryChart = () => {
	const readSummary = useAppSelector((state) => state.ContentSummaryData);

	const chartRef = useRef<am4charts.PieChart>();
	const chartData = readSummary?.result[0]?.page_categories;

	const view = chartData.map((dataItem: any) => ({
		category: dataItem.category?.reduce((a: any, b: any) => {
			return a + b;
		}),
		count: dataItem.count,
	}));

	// Create chart instance
	useEffect(() => {
		// if (!chartData || chartData[0].category === null) {
		// return;
		// }

		// Apply amCharts theme
		am4core.useTheme(am4themes_animated);

		// Create chart instance
		const chart = am4core.create("chartdiv2", am4charts.PieChart);
		chart.data = view;

		// Set chart data

		var series = chart.series.push(new am4charts.PieSeries());
		chart.logo.disabled = true;
		series.dataFields.value = "category";
		series.dataFields.category = "count";

		series.slices.template.cornerRadius = 10;
		series.slices.template.innerCornerRadius = 7;
		series.slices.template.draggable = true;
		series.slices.template.inert = true;

		series.hiddenState.properties.startAngle = 90;
		series.hiddenState.properties.endAngle = 90;

		chart.legend = new am4charts.Legend();

		// Assign chart instance to the ref
		chartRef.current = chart;

		// Clean up on unmount
		return () => {
			chart.dispose();
		};
	}, [chartData]);

	return (
		<Container>
			<Wrapper>
				<Title>Page_Categories</Title>
				<div id='chartdiv2' style={{ height: "100%", width: "100%" }}></div>
			</Wrapper>
		</Container>
	);
};

export default TextCategoryChart;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
const Wrapper = styled.div`
	min-height: 400px;
	width: 95%;
	background-color: #fff;
	padding-bottom: 40px;
`;
