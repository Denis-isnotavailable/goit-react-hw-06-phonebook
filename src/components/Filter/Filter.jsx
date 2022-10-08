import { useSelector, useDispatch } from "react-redux";
import { FilterStyled } from "components/Filter/Filter.styled";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";


export const Filter = () => {
    const dispatch = useDispatch();
    const filterRedax = useSelector(getFilter);

    const handleChange = e => {
        const { value } = e.target;        
        dispatch(setFilter(value));        
    };

    return (
            <FilterStyled>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    value={filterRedax}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"              
                />
            </FilterStyled>
        );
}