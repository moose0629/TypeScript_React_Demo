import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const CustomTable = (props: any) => {
  const { data, groupType } = props;
  let config: any[] = [
    {
      title: "State",
      width: 124,
      dataIndex: "state",      
    },
    {
      title: "City",
      width: 124,
      dataIndex: "city"
    },
    {
      title: "Type",
      width: 124,
      dataIndex: "type"
    },
    {
      title: "Houses",
      width: 124,
      dataIndex: "houses",
      summaryColumn: true
    },
    {
      title: "Avg.Price",
      width: 124,
      render: (_: any, item: any) => (item.price / item.houses).toFixed(2),
      summaryColumn: true
    },
    {
      title: "Total Price",
      width: 124,
      dataIndex: "price",
      summaryColumn: true
    },
  ]

  config = config.filter(({dataIndex, summaryColumn}) => groupType.includes(dataIndex) || summaryColumn)

  return <Table columns={config} dataSource={data} rowKey={({id}) => id}/>
}

CustomTable.propTypes = {
  data: PropTypes.array,
  groupType: PropTypes.array
}

CustomTable.defaultProps = {
  data: [],
  groupType: []
};

export default CustomTable
 