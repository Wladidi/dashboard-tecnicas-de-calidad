// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";
import { useState } from "react";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;
  
  const [tests,setTests] = useState([
    {title: 'Servicio obtener información patente v1',key: 0,options:{}, values: [
      {
        name: "CPU (%)",
        data: [32, 17, 5],
      },
      {
        name: "RAM (%)",
        data: [48, 34, 23],
      },
      {
        name: "Disco (%)",
        data: [26, 15, 9],
      },
    ]},
    {title: 'Servicio obtener información patente v2',key: 1,options:{}, values: [
      {
        name: "CPU (%)",
        data: [39, 22, 13],
      },
      {
        name: "RAM (%)",
        data: [54, 38, 26],
      },
      {
        name: "Disco (%)",
        data: [38, 23, 14],
      },
    ]},
    {title: 'Servicio obtener información patente v3',key: 2,options:{}, values: [
      {
        name: "CPU (%)",
        data: [56, 31, 22],
      },
      {
        name: "RAM (%)",
        data: [64, 47, 30],
      },
      {
        name: "Disco (%)",
        data: [52, 33, 20],
      },
    ]},
    {title: 'Servicio obtener información patente v4',key: 3,options:{}, values: [
      {
        name: "CPU (%)",
        data: [60, 48, 33],
      },
      {
        name: "RAM (%)",
        data: [68, 51, 39],
      },
      {
        name: "Disco (%)",
        data: [62, 33, 28],
      },
    ]},
    {title: 'Servicio obtener información patente v5',key: 4,options:{}, values: [
      {
        name: "CPU (%)",
        data: [73, 54, 49],
      },
      {
        name: "RAM (%)",
        data: [78, 61, 52],
      },
      {
        name: "Disco (%)",
        data: [68, 51, 40],
      },
    ]},
    {title: 'Servicio obtener información patente v6',key: 5,options:{}, values: [
      {
        name: "CPU (%)",
        data: [100, 93, 86],
      },
      {
        name: "RAM (%)",
        data: [100, 90, 82],
      },
      {
        name: "Disco (%)",
        data: [100, 82, 70],
      },
    ]},
  ])
  const [currentTest,setCurrentTest] = useState(tests[0])

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          {currentTest.title}
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue={0}
          onChange={(e) => setCurrentTest(tests[e.target.value])}
          width='unset'
          fontWeight='700'>
          {tests.map(o => <option value={o.key}>{o.title}</option>)}
        </Select>
      </Flex>

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={currentTest.values}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
