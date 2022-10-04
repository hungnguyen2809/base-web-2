import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadCore from 'react-bootstrap-typeahead/types/core/Typeahead';
import { TypeaheadProps } from 'react-bootstrap-typeahead/types/types';

export type SelectTypeheadProps = TypeaheadProps;
export type SelectTypeheadRef = TypeaheadCore;

const SelectTypehead: React.ForwardRefRenderFunction<SelectTypeheadRef, SelectTypeheadProps> = (props, ref) => {
  return <Typeahead ref={ref} {...props} emptyLabel="Không có dữ liệu" paginationText="Hiển thị thêm kết quả" />;
};

export default SelectTypehead;
