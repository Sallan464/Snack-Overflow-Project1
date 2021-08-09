import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="new-post-form">
                    <div className="form-row">
                        <div id="upload-col" className="col-3 mx-auto">
                            <input type="file" id="user-file-upload" className="hidden" />
                            <label htmlFor="user-file-upload" className="btn btn-outline-secondary m-4">Add your photo</label>
                        </div>
                        {/* TODO: put button to show this input i.e. checkbox: "own it!"" */}
                        <div className="col-sm m-4">
                            <input id="user-name" type="text" className="form-control" placeholder="optional: chefs name" />
                            <label htmlFor="user-name" className="m-2">who dun it?</label>
                        </div>
                    </div>
                    <div className="form-row mx-4">
                        <div className="w-100">
                            <TextareaAutosize id="user-caption" className="form-control" rows="1" placeholder="Some delicious description goes in here... (max 100 characters)" />
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