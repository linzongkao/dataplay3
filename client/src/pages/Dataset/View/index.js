import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';

import DatasetListSelector from './DatasetListSelector'
import DatasetTable from './DatasetTable'

import styles from './index.less';

@connect(({ dataset, loading }) => ({
  dataset,
  loading: loading.effects['dataset/fetch'],
}))
class Dataset extends PureComponent {

  render() {
    const { dataset, loading , dispatch } = this.props
    const { dataSource, columns } = dataset.currentDataset

    return (
      <div className={styles.dataset}>
        <Row gutter={16}>
          <Col span={8}>
            <Row>
              <DatasetListSelector ></DatasetListSelector>
            </Row>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={20}>
            <DatasetTable dataSource={dataSource} columns={columns} ></DatasetTable>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dataset;