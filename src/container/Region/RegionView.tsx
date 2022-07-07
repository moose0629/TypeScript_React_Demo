import React, { useState, useEffect } from 'react';
import { RegionContainer } from './style';
import { Form, Select, Row, Col } from 'antd';
import CustomTable from '../../components/CustomTable';
import WrapperInput from '../../components/WrapperInput/WrapperInput';
// import { Field } from '../../entity/Field';


const { Option } = Select;

const RegionView = (props: any) => {

  const { setLoading } = props;
  const [data, setData] = useState([]);
  const [groupType, setGroupType] = useState(["state", "city"]);
  const [groupData, setGroupData] = useState([]);
  const [filterState, setFilterState] = useState<{options: string[], filterCol: string | null}>({
    options: [],
    filterCol: null
  })
  const [filterText, setFilterText] = useState("");


  const classifyToGroup = (data: any[], newGroupType?: string[]) => {
    const selectedGroupType = newGroupType ? newGroupType : groupType
    const obj: any = {};
    const result = data.reduce(function(arr, cur) {      
      const groupKey = selectedGroupType.reduce((concat, groupCol) => `${concat}-${cur[groupCol]}`,"")
      if (!obj[groupKey]) {
        obj[groupKey] = Object.assign({}, cur)
        obj[groupKey].houses = 1
        arr.push( obj[groupKey] )
      } else {
        obj[groupKey].houses++;
        obj[groupKey].price += cur.price;        
      }
      return arr;
    }, [])

    setGroupData(result)
  }

  const onFilterTypeChange = (value: string) => {
    setFilterState({
      ...filterState,
      filterCol: value
    })
    setFilterText("")
  }

  const onFilterTextChange = (value: string) => {
    setFilterText(value)
  }

  const onGroupTypeChange = (value: string[]) => {
    setGroupType(value)
    filterAndReclassify(value)
  }

  const filterAndReclassify = (groupType?: string[]) => {
    const result = filterText ? data.filter((item) => {
      return (item[`${filterState.filterCol}`] as string).toLowerCase().includes(filterText.toLocaleLowerCase())
    }) : data

    classifyToGroup(result,groupType)
  }

  useEffect(() => {
    setLoading(true)
    fetch('/api/properties')
    .then((res) => res.json())
    .then((json) => {
      setData(json)
      setFilterState({
        ...filterState,
        options: Object.keys(json[0]).filter((key) => key !== "id")
      })
      setLoading(false)
      classifyToGroup(json)
    })
  }, [])

  useEffect(() => {
    filterAndReclassify();
  }, [filterText])

  return (
    <RegionContainer>
      <Row align='middle' style={{width: '100%'}} gutter={8}>
        <Col>Filter Type:</Col>
        <Col span={6}>
          <Select onChange={onFilterTypeChange} style={{ width: "100%" }}>
            {filterState.options.map((option) => <Option value={option} key={option}>{option}</Option>)}
          </Select>
        </Col>
        <Col>Filter Text:</Col>
        <Col span={6}>
          <WrapperInput value={filterText} onChange={onFilterTextChange} debounceMode={true} />
        </Col>
        <Col>Group Col:</Col>
        <Col span={6}>
          <Select mode="multiple" value={groupType} onChange={onGroupTypeChange} style={{ width: "100%" }}>
            <Option value="state">State</Option>
            <Option value="city">City</Option>
            <Option value="type">Type</Option>
          </Select>
        </Col>
      </Row>
    <CustomTable groupType={groupType} data={groupData}/>
  </RegionContainer>
  )
}

export default RegionView;