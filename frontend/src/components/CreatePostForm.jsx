import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.isCreatPostSelectedHandler}></button>
                <form id="new-post-form">
                    <div class="form-row">
                        <div id="upload-col" class="col-3 mx-auto">
                            <input type="file" id="user-file-upload" class="hidden" />
                            <label for="user-file-upload" class="btn btn-outline-secondary m-4">Add your photo</label>
                        </div>
                        {/* TODO: put button to show this input i.e. checkbox: "own it!"" */}
                        <div class="col-sm m-4">
                            <input id="user-name" type="text" class="form-control" placeholder="optional: chefs name" />
                            <label class="m-2" for="user-name">who dun it?</label>
                        </div>
                    </div>
                    <div class="form-row mx-4">
                        <div class="w-100">
                            <TextareaAutosize id="user-caption" class="form-control" rows="1" placeholder="Some delicious description goes in here... (max 100 characters)" />
                            <label class="m-2" for="user-caption">what's cookin'?</label>
                        </div>
                    </div>
                    <div class="form-row w-100">
                        <input type="submit" class="btn btn-outline-success my-4 mx-auto" />
                    </div>

                </form>
            </div>
        )
    }
}

export default CreatePostForm;