// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import {  pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function Conversion(props) {
  const { title,options,values,labels,colors,...rest } = props;
  const [ciclo,setCiclo] = useState('1');


  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          {title}
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='1'
          onChange={(e) => setCiclo(e.target.value)}
          width='unset'
          fontWeight='700'>
          {options.map(o => <option value={o.value}>{o.title}</option>)}
        </Select>
      </Flex>

      <ReactApexChart
        options={{...pieChartOptions,
          labels,
          colors,
          fill: { colors }
        }}
        series={values[ciclo]}
        type='pie'
        width='100%'
        height='55%'
      />
      <Card
        bg={cardColor}
        flexDirection='row'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
          {labels.map((l,i) => (
          <>
          <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              {l}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            {values[ciclo][i]}%
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        </>
        ))}
        
      </Card>
    </Card>
  );
}
