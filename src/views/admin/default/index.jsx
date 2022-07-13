
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdOutlineClose,
  MdOutlineCheck
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import cargas from './components/carga.json'

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Total de pruebas'
          value='31'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlineCheck} color="#80FF00" />
              }
            />
          }
          name='Pruebas exitosas'
          value='80%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlineClose} color="#FF2D00" />
              }
            />
          }
          name='Pruebas fallidas'
          value='20%'
        />

        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Porcentaje de pruebas realizado'
          value='100%'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Ciclo actual'
          value='Ciclo 3 (Final)'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent title="Servicio obtener información patente" />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap='20px' mb='20px'>
        {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'> */}

        <PieCard title="Pruebas de estrés" options={[{ title: 'Ciclo 1', value: '1' }, { title: 'Ciclo 2', value: '2' }, { title: 'Ciclo final', value: '3' }]}
          values={{
            '1': [48, 52],
            '2': [67, 33],
            '3': [90, 10]
          }}
          labels={["Aprobadas", "Fallidas"]}
          colors={["#4318FF", "#6AD2FF"]}
        />
        <PieCard title="Pruebas de carga" options={[{ title: 'Ciclo 1', value: '1' }, { title: 'Ciclo 2', value: '2' }, { title: 'Ciclo final', value: '3' }]}
          values={{
            '1': [32, 78],
            '2': [58, 42],
            '3': [85, 15]
          }}
          labels={["Aprobadas", "Fallidas"]}
          colors={["#4318FF", "#6AD2FF"]}
        />
        <PieCard title="Total pruebas realizadas" options={[{ title: 'Ciclo 1', value: '1' }, { title: 'Ciclo 2', value: '2' }, { title: 'Ciclo final', value: '3' }]}
          values={{
            '1': [57, 43],
            '2': [68, 32],
            '3': [88, 12]
          }}
          labels={["Aprobadas", "Fallidas"]}
          colors={["#4318FF", "#6AD2FF"]}
        />

      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic title="Pruebas de carga" options={cargas} />
          <DailyTraffic title="Pruebas de estrés" options={tableDataComplex} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
