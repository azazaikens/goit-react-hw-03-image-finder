import { Component } from "react";
import style from '../../styles.module.css'

export class Searchbar extends Component {
    state = {
        inpValue: '',
    };

    onChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value })
    };

    onSubmit = ev => {
        ev.preventDefault();
        this.props.handleSubmit(this.state.inpValue)
    }

    render() {
        return (
          <header className={style.Searchbar}>
            <form className={style.SearchForm} onSubmit={this.onSubmit}>
              <button type="submit" className={style.SearchFormButton}>
                <span className={style.SearchFormButtonLabel}></span>
              </button>

              <input
                className={style.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.onChange}
                value={this.state.inpValue}
                name="inpValue"
              />
            </form>
          </header>
        );
    }
};
