import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './TextCards.css'
import DeleteText from '../Buttons/DeleteText';
import DoneButton from "../Buttons/DoneButton";
import NotDoneButton from "../Buttons/NotDoneButton";
import TimerButton from "../Buttons/TimerButton";

const TextGrid = ({texts, setTexts}) => {
    return (
        <div className="text-grid">
            <CardGroup>
                {
                    texts?.map((text) => {
                        if (text.complete) {
                            return (
                                <Card className={'card'} key={text.textId} bg="light" border="primary" style={{width: '25rem'}} >
                                    <Card.Header className={"card-header"}>{text.textId}</Card.Header>
                                    <Card.Img className={"card-image-closed"}
                                              src={"https://game-icons.net/icons/000000/ffffff/1x1/willdabeast/black-book.png"}/>
                                    <Card.Body className={'card-body'}>
                                        <Card.Title>{text.title}</Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                        <div className="text-genre">
                                            Genre: {text.genre}
                                        </div>
                                        <div className={"text-words"}>
                                            Words: {text.wordCount} words
                                        </div>
                                        <div className={"text-elapsed"}>
                                            Time read: {text.elapsedTime}
                                        </div>
                                        <NotDoneButton text={text} texts={texts} setTexts={setTexts}>

                                        </NotDoneButton>
                                        <DeleteText text={text} texts={texts} setTexts={setTexts}>

                                        </DeleteText>
                                    </Card.Body>
                                </Card>)


                        }
                        return (
                            <Card className={'card'} key={text.textId} bg="light" border="primary" style={{width: '25rem'}}>
                                <Card.Header>{text.textId}</Card.Header>
                                <Card.Img className={"card-image-open"}
                                          src={"https://openclipart.org/image/2400px/svg_to_png/191918/activity.png"}/>
                                <Card.Body>
                                    <Card.Title className={"class-title"}>{text.title}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <div className="text-genre">
                                        Genre: {text.genre}
                                    </div>
                                    <div className={"text-words"}>
                                        {text.wordCount} words
                                    </div>
                                    <div className={"text-complete"}>
                                        {text.isComplete}
                                    </div>
                                    <div className={"text-elapsed"}>
                                        Time read: {text.elapsedTime}
                                    </div>
                                    <DoneButton text={text} texts={texts} setTexts={setTexts}></DoneButton>
                                    <DeleteText text={text} texts={texts} setTexts={setTexts}></DeleteText>
                                    <TimerButton text={text} texts={texts} setTexts={setTexts}></TimerButton>
                                </Card.Body>
                            </Card>)
                    })
                }
            </CardGroup>
        </div>
    )
}

export default TextGrid