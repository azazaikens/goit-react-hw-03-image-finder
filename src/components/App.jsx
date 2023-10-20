import { Component } from 'react';
import { axiosAPI } from './axios';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

import style from '../styles.module.css'

export class App extends Component {
  state = {
    error: null,
    posts: [],
    query: '',
    page: 1,
    isLoading: true,
    modal: {
      isOpen: false,
      modalData: null,
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchPosts();
    }
  }
  
  fetchPosts = async () => {
    const { query, page, posts } = this.state;
    try {
      this.setState({ isLoading: true });
      const requestedHits = await axiosAPI(query, page);
      if (page === 1) {
        this.setState({ posts: requestedHits.hits, showLoadMore: true });
        return;
      } else {
        this.setState({
          posts: posts.concat(requestedHits.hits),
          showLoadMore: true,
        });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = inputValue => {
    this.setState({
      query: inputValue,
      page: 1,
    });
  };

  onClickLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      },
    });
  };

  render() {
    return (
      <div className={style.App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        <Loader loadingt={this.state.isLoading} error={this.state.error} />
        <ImageGallery posts={this.state.posts} onOpenModal={this.onOpenModal} />
        <Button onClickLoadMore={this.onClickLoadMore} />
        {this.state.modal.isOpen === true && (
          <Modal
            data={this.state.modal.modalData}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}
