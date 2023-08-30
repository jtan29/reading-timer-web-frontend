import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './TextCards.css'
import DeleteText from '../Buttons/DeleteText';
import DoneButton from "../Buttons/DoneButton";
import NotDoneButton from "../Buttons/NotDoneButton";
import TimerButton from "../Buttons/TimerButton";
import * as util from './Utility'

const TextGrid = ({texts, setTexts}) => {
    return (
        <div className="text-grid">
            <CardGroup>
                {
                    texts?.map((text) => {
                        if (text.complete) {
                            return (
                                <Card key={text.textId} style={{ width: '15rem' }}>
                                    <Card.Img className={"card-image-closed"} variant="top"
                                              src={"https://game-icons.net/icons/000000/ffffff/1x1/willdabeast/black-book.png"}/>
                                    <Card.Body className={'card-body'}>
                                        <Card.Title className={"card-title"}>{text.title}</Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                        <div className="text-genre">
                                            Genre: {util.convertGenre(text.genre)}
                                        </div>
                                        <div className={"text-words"}>
                                            Words: {text.wordCount} words
                                        </div>
                                        <div className={"text-elapsed"}>
                                            Time read: {text.timeStatement}
                                        </div>
                                        <div className={"text-speed"}>
                                            Reading speed: {util.calcReadingSpeed(text.wordCount, text.elapsedTime)} words/min
                                        </div>
                                        <NotDoneButton text={text} texts={texts} setTexts={setTexts}>

                                        </NotDoneButton>
                                        <DeleteText text={text} texts={texts} setTexts={setTexts}>

                                        </DeleteText>
                                    </Card.Body>
                                </Card>)


                        } else {
                            return (
                                <Card key={text.textId} style={{ width: '18rem' }}>
                                    <Card.Img className={"card-image-open"}
                                              src={"https://openclipart.org/image/2400px/svg_to_png/191918/activity.png"}/>
                                    <Card.Body>
                                        <Card.Title className={"card-title"}>{text.title}</Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                        <div className="text-genre">
                                            Genre: {util.convertGenre(text.genre)}
                                        </div>
                                        <div className={"text-words"}>
                                            Words: {text.wordCount} words
                                        </div>
                                        <div className={"text-elapsed"}>
                                            Time read: {text.timeStatement}
                                        </div>
                                        <DoneButton text={text} texts={texts} setTexts={setTexts}></DoneButton>
                                        <TimerButton text={text} texts={texts} setTexts={setTexts}></TimerButton>
                                        <DeleteText text={text} texts={texts} setTexts={setTexts}></DeleteText>
                                    </Card.Body>
                                </Card>)
                        }
                    })
                }
            </CardGroup>
        </div>
    )
}

export default TextGrid