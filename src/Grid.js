import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import Column from './Column';
// import styles from './Grid.module.scss';
const SIZE_TYPE = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  children?: Array<React.Element<>>,
  center?: SIZE_TYPE,
  start?: SIZE_TYPE,
  end?: SIZE_TYPE,
  top?: SIZE_TYPE,
  middle?: SIZE_TYPE,
  bottom?: SIZE_TYPE,
  around?: SIZE_TYPE,
  between?: SIZE_TYPE,
}

class Grid extends Component<Props> {
  static Column = Column;

  render() {
    const {
      children,
      start, center, end,
      top, middle, bottom,
      around, between,
      className
    } = this.props;

    // const gridClasses = classnames(
    //   styles.Grid,
    //   start && styles[`start-${start}`],
    //   center && styles[`center-${center}`],
    //   end && styles[`end-${end}`],
    //   top && styles[`top-${top}`],
    //   middle && styles[`middle-${middle}`],
    //   bottom && styles[`bottom-${bottom}`],
    //   around && styles[`around-${around}`],
    //   between && styles[`between-${between}`],
    //   className
    // );className={gridClasses}

    return <div >{ children }</div>;
  }
}

export default Grid;
