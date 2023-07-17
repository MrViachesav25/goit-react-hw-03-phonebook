import PropTypes from 'prop-types';
import { FilterLabel, Input } from './FilterInput.styled';

const FilterInput = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default FilterInput;