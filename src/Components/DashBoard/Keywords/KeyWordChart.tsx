import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface Iprops {
	propsData: any;
}

const KeyWordChart: React.FC<Iprops> = ({ propsData }) => {
	const chartRef = useRef<am4charts.XYChart>();

	// const Sorted = (data: any) => {
	// return (a: any, b: any) => {
	// if (a[data] < b[data]) {
	// return -1;
	// } else {
	// return 1;
	// }
	// };
	// };

	// const sortData = propsData?.sort(Sorted("month"));
	useEffect(() => {
		let chart = am4core.create("chartdiv3", am4charts.XYChart);

		chart.data = propsData;

		let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "month";
		categoryAxis.title.text = "Month";
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.location = 0;
		dateAxis.renderer.minGridDistance = 50;
		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.title.text = "Search_volume(cm)";
		// Create series
		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.valueY = "search_volume";
		series.dataFields.dateX = "year";
		series.dataFields.categoryX = "month";
		series.name = "monthly";
		series.fillOpacity = 0.3;
		series.defaultState.transitionDuration = 1000;
		series.tensionX = 0.8;
		series.tooltipText = " [b]{categoryX}[/] ";
		series.strokeWidth = 2;
		series.smoothing = "monotoneX";
		var bullet = series.bullets.push(new am4charts.CircleBullet());
		bullet.circle.stroke = am4core.color("#fff");
		bullet.circle.strokeWidth = 2;
		chart.logo.disabled = true;
		// chart.legend = new am4charts.Legend();
		chart.cursor = new am4charts.XYCursor();
		chartRef.current = chart;
		return () => {
			chart.dispose();
		};
	}, [propsData]);

	return (
		<Container>
			<Wrapper>
				<Title>Monthly_Search</Title>
				<div id='chartdiv3' style={{ height: "500px", width: "100%" }}></div>
			</Wrapper>
		</Container>
	);
};

export default KeyWordChart;

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
