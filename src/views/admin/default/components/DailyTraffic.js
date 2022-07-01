import React, { useState } from "react";

// Chakra imports
import { Box, Flex, Icon, Select, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "variables/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";


const coverageOptions = [{title: 'CPU', id: 'cpu'},{title: 'RAM', id: 'ram'},{title: 'Memoria', id: 'memoria'},]

export default function DailyTraffic(props) {
  const { title,options,...rest } = props;

  const handleUpdateState = (target,value) => {
    if(target === "first"){
        setCurrent(options[value])
    }
    
  }

  const [current,setCurrent] = useState(options[0]);

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              {title}
            </Text>
          </Flex>
          <Flex align='end'>
            <Select
              fontSize='sm'
              variant='subtle'
              name="first"
              defaultValue={0}
              onChange={(e) => handleUpdateState(e.target.name,e.target.value)}
              width='unset'
              fontWeight='700'>
                {options.map(o => <option value={o.id}>{o.nombre}</option>)}
            </Select>
          
          </Flex>
        </Flex>
       
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={current.data}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  );
}
