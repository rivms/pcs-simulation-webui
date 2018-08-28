// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';

import { svgs } from 'utilities';
import Flyout from 'components/shared/flyout';
import { Svg } from 'components/shared';
import DeviceModelForm from '../views/deviceModelForm';
import DeviceModelUploadForm from '../views/deviceModelUploadForm';

export class NewDeviceModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBasic: true
    };
  }

  onClickBasic = () => this.setState({ isBasic: true });

  onClickAdvanced = () => this.setState({ isBasic: false });

  render() {
    const { t, onClose } = this.props;
    const { isBasic } = this.state;

    return (
      <Flyout.Container className="device-model-flyout-container">
        <Flyout.Header>
          <Flyout.Title>
            <Svg path={svgs.plus} className="flyout-title-icon" />
            { t('deviceModels.flyouts.new.title') }
          </Flyout.Title>
          <Flyout.CloseBtn onClick={onClose} />
        </Flyout.Header>
        <Flyout.Content >
          <div className='tab-container'>
            <div
              className={isBasic ? 'tab active' : 'tab'}
              onClick={this.onClickBasic}>
              { t('deviceModels.flyouts.new.basic') }
            </div>
            <div
              className={isBasic ? 'tab' : 'tab active'}
              onClick={this.onClickAdvanced}>
              { t('deviceModels.flyouts.new.advanced') }
            </div>
          </div>
          {
            isBasic
              ? <DeviceModelForm {...this.props} />
              : <DeviceModelUploadForm {...this.props} />
          }
        </Flyout.Content>
      </Flyout.Container>
    );
  }
}
