import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";
import { handleMouseDown, handleMouseUp } from "../../utils/HandleMouse";
import { deleteContact, } from "../../redux/contactsSlice";


export const ContactItem = ({ id, name, number, }) => {
    const dispatch = useDispatch();    

    return (
            <ContactItemStyled >
                {name}: {number}
                <button type="button"
                    onClick={() => dispatch(deleteContact(id))}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    Delete
                </button>
            </ContactItemStyled>
        );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}