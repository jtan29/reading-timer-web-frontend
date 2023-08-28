import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './TextCards.css'
import {Button} from "react-bootstrap";

const TextGrid = ({texts}) => {
    return (
        <div className="text-grid">
            <CardGroup>
                {
                    texts?.map((text) => {
                        if (text.complete) {
                            return (
                                <Card key={text.textId} bg="light" border="primary" style={{width: '25rem'}} className={'card'} >
                                    <Card.Header>{text.textId}</Card.Header>
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
                                    </Card.Body>
                                </Card>)


                        }
                        return (
                            <Card  bg="light" style={{width: '25rem'}} border="primary" className={'card'} className={'card-grid'} key={text.textId}>
                                <Card.Header>{text.textId}</Card.Header>
                                <Card.Img className={"card-image-open"}
                                          src={"https://openclipart.org/image/2400px/svg_to_png/191918/activity.png"}/>
                                <Card.Body>
                                    <Card.Title>{text.title}</Card.Title>
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
                                    <Button as="input" type="submit" value="Start Timer"/>{''}
                                </Card.Body>
                            </Card>)
                    })
                }
            </CardGroup>
        </div>
    )
}

export default TextGrid