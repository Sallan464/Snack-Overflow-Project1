import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Post from '../models/Post';
import axios from 'axios'

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null
        }

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    formSubmitHandler = async (e) => {
        // For Debug
        e.preventDefault();

        // update post data
        console.log(e.target.userName.value)
        const postData = Post.newPost(
            this.state.selectedFile.name,
            e.target.userCaption.value,
            e.target.userName.value)
            .toJson()

        console.log(postData);
        axios.post('http://localhost:8080/new-post-data', postData)
            .then(res => {
                console.log(res);
            })

        // Upload image
        const fileData = new FormData(); //FormData is a React defualt
        fileData.append('image', this.state.selectedFile, postData.date) // use date of creation as UUID
        axios.post('http://localhost:8080/new-post-img', fileData)//'url that accepts form data added and send to server url to store uploaded file in backend', formData)
            .then(res => {
                console.log(res);
            })

    }

    fileSelectedHandler = async (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler} id="new-post-form">
                    <div className="form-row">
                        <div id="upload-col" className="col-3 mx-auto">
                            <input type="file" onChange={this.fileSelectedHandler} id="user-file-upload" name="userFileUpload" className="hidden" required />
                            <label htmlFor="user-file-upload" className="btn btn-outline-secondary m-4">Add your photo</label>
                        </div>
                        <div className="col-sm m-4">
                            <input id="user-name" name="userName" type="text" className="form-control" placeholder="optional: chefs name" />
                            <label htmlFor="user-name" className="m-2">who dun it?</label>
                        </div>
                    </div>
                    <div className="form-row mx-4">
                        <div className="w-100">
                            <TextareaAutosize id="user-caption" name="userCaption" className="form-control" rows="1" placeholder="Some delicious description goes in here... (max 100 characters)" required />
                            <label htmlFor="user-caption" className="m-2">what's cookin'?</label>
                        </div>
                    </div>
                    <div className="form-row w-100">
                        <input type="submit" className="btn btn-outline-success my-4 mx-auto" />
                    </div>

                </form>
            </div >
        )
    }
}

export default CreatePostForm;
