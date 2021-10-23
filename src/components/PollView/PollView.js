import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Button, Form, Radio, Grid, Image, Segment } from 'semantic-ui-react';
import { handleSaveQuestionAnswer } from '../../store/index';

export class PollView extends Component {
  state = {
    value: ''
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      const { authUser, question, handleSaveQuestionAnswer } = this.props;
      handleSaveQuestionAnswer(authUser, question.id, this.state.value);
    }
  };

  render() {
    const { question, user } = this.props;
    const disabled = this.state.value === '' ? true : false;

    return (
        <div className="col-sm-12 col-md-4 m-auto mt-3">
            <Segment.Group>
                <Header
                as="h4"
                textAlign="left"
                block
                attached="top"
                content={`${user.name} asks:`}
                />

                <Grid divided padded>
                <Grid.Row>
                    <Grid.Column width={5}>
                    <Image src={user.avatarURL} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Fragment>
                            <Header as="h4">Would you rather</Header>
                            <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Radio
                                label={question.optionOne.text}
                                name="radioGroup"
                                value="optionOne"
                                checked={this.state.value === 'optionOne'}
                                onChange={this.handleChange}
                                />
                                <br />
                                <Radio
                                label={question.optionTwo.text}
                                name="radioGroup"
                                value="optionTwo"
                                checked={this.state.value === 'optionTwo'}
                                onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button
                                color="green"
                                size="tiny"
                                fluid
                                positive
                                disabled={disabled}
                                content="Submit"
                                />
                            </Form.Field>
                            </Form>
                        </Fragment>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment.Group>
        </div>
    );
  }
}

function mapStateToProps({ authUser, questions, users}, { match }) {
  const { question_id } = match.params;
  const question = questions[question_id];
  const user = Object.values(users).filter(user => user.questions.includes(question_id))[0]
  return {
    user,
    authUser,
    question
  };
}

export default connect(
  mapStateToProps,
  { handleSaveQuestionAnswer }
)(PollView);