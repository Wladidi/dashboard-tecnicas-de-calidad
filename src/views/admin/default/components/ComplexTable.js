import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Box,
  Select,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import { MdCheckCircle, MdCancel, MdOutlineError, MdAddLink, MdLogout } from "react-icons/md";
import carga from './carga.json'
import { RiArrowUpSFill } from "react-icons/ri";



// Assets

export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const [tests,setTests] = useState([{title: "Estrés", id: 0, data: tableDataComplex}, {title: "Carga", id: 1, data: carga}]);
  const [currentTest,setCurrentTest] = useState(tests[0])

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => currentTest.data, [currentTest.data]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 600;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const bgColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex alignContent="center" px='25px' justify='space-between' mb='10px' align='center'>
        <a style={{flex: 1, flexDirection:'row', alignItems:'center'}} target='_blank' rel='noreferrer' href="https://docs.google.com/spreadsheets/d/149eZJ0feuvBjoANayZUG3SSSJOJ9Lnc7/">
          <Text
            color={textColor}
            fontSize='22px'
            display="inline"
            fontWeight='700'
            lineHeight='100%'>
            Pruebas de {currentTest.title}
          </Text>
          <Icon as={MdLogout} fontSize="24px" ml="8px" mt="auto" color='blue.500' />
        </a>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue={0}
          onChange={(e) => setCurrentTest(tests[e.target.value])}
          width='unset'
          fontWeight='700'>
          {tests.map(o => <option value={o.id}>{o.title}</option>)}
        </Select>
      </Flex>
      <Box width="100%" overflowY="auto" maxHeight="260px">
      <Table  {...getTableProps()} variant='simple' color='gray.500'>
        <Thead  zIndex={100} bg={bgColor} position="sticky" top={0}>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        
          <Tbody >
         
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "Nombre") {
                      data = (
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <Flex align='center'>
                          <Icon
                            w='24px'
                            h='24px'
                            me='5px'
                            color={
                              cell.value === "Aprobada"
                                ? "green.500"
                                : cell.value === "Fallida"
                                ? "red.500"
                                : cell.value === "null"
                                ? "orange.500"
                                : null
                            }
                            as={
                              cell.value === "Aprobada"
                                ? MdCheckCircle
                                : cell.value === "Fallida"
                                ? MdCancel
                                : cell.value === "null"
                                ? MdOutlineError
                                : null
                            }
                          />
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "Fecha último testeo") {
                      data = (
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === "Consumo del servicio (%)") {
                      data = (
                        <Flex align='center'>
                          <Progress
                            variant='table'
                            colorScheme='brandScheme'
                            h='8px'
                            w='108px'
                            value={cell.value}
                          />
                        </Flex>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        maxH='30px !important'
                        py='8px'
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}         
          </Tbody>
      </Table>
      </Box>
    </Card>
  );
}
