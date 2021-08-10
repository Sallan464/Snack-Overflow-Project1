import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import RestfulInterface from '../models/RestfulInterface';
import Post from '../models/Post';
import axios from 'axios'

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null
        }

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }

    formSubmitHandler(e) {
        e.preventDefault();

        const newPost = Post.newPost('imageurl', e.target.userName.value, e.target.userCaption)
        let jsonNewPost = newPost.toJson()
        let dataToSend = {
            posts: jsonNewPost,
            imageFile: e.target.userFileUpload.value
        }
        RestfulInterface.saveNewPost(dataToSend)
    }

    fileSelectedHandler(e) {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    fileUploadHandler() {
        const formData = new FormData(); //FormData is a React defualt
        formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:8080/new-post', formData)//'url that accepts form data added and send to server url to store uploaded file in backend', formData)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler} id="new-post-form" name="form">
                    <div className="form-row">
                        <div id="upload-col" className="col-3 mx-auto">
                            <input type="file" onChange={this.fileSelectedHandler} id="user-file-upload" name="userFileUpload" className="hidden" />
                            <button onClick={this.fileUploadHandler}>Upload</button>
                            <label htmlFor="user-file-upload" className="btn btn-outline-secondary m-4">Add your photo</label>
                        </div>
                        {/* TODO: put button to show this input i.e. checkbox: "own it!"" */}
                        <div className="col-sm m-4">
                            <input id="user-name" name="userName" type="text" className="form-control" placeholder="optional: chefs name" />
                            <label htmlFor="user-name" className="m-2">who dun it?</label>
                        </div>
                    </div>
                    <div className="form-row mx-4">
                        <div className="w-100">
                            <TextareaAutosize id="user-caption" name="userCaption" className="form-control" rows="1" placeholder="Some delicious description goes in here... (max 100 characters)" />
                            <label htmlFor="user-caption" className="m-2">what's cookin'?</label>
                        </div>
                    </div>
                    <div className="form-row w-100">
                        <input type="submit" className="btn btn-outline-success my-4 mx-auto" />
                    </div>

                </form>
            </div>
        )
    }
}

export default CreatePostForm;
