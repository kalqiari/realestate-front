import "./Search.css"
import {useSearchParams} from "react-router-dom";
import {Fragment, useRef} from "react";
import {useNavigate} from "react-router";

export default function Search(props) {
    const [searchParams, setSearchParams] = useSearchParams({ })
    const navigate = useNavigate();
    const form = useRef();
    const submitHandler = (e) => {
        e.preventDefault()
        if(form.current['filter'].value) {
            const params = searchParams;
            params.set('filter', form.current['filter'].value);
            params.set('input', form.current['input'].value);
            setSearchParams(params);
        }
        else
            navigate("/students");

    }
    const space = <Fragment>&nbsp;&nbsp;</Fragment>

    return (
        <div>
            <form ref={form} className="search" onSubmit={submitHandler}>

                    <label >Filter: </label>
                    <select name="filter">
                        <option value="0">N/A</option>
                        <option value="gpa">&lt; gpa</option>
                        <option value="program">program</option>
                    </select>
                {space}
                    <label >Input: </label>
                    <input type="text" placeholder="Search.." name="input"/>

                <button>Apply Filter</button>
            </form>

        </div>
    );
}
