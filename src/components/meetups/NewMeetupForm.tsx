import style from "./NewMeetupForm.module.scss"
import Card from "../ui/card/Card";
import {useRef} from "react";

function NewMeetupForm() {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImageUrl = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImageUrl,
            address: enteredAddress,
            description: enteredDescription
        };

        console.log(meetupData);
    }

    return (
        <Card>
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={style.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea id="description" required rows={5} ref={descriptionInputRef}></textarea>
                </div>
                <div className={style.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;