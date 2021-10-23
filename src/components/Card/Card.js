import React, { Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';

export class UserCard extends Component {
    handleViewPoll = e => {
        this.setState(prevState => ({
          viewPoll: !prevState.viewPoll
        }));
    };
    render() {
        const { user, questionCard } = this.props;

        return (
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
                    <Header as="h5" textAlign="left">
                        Would you rather
                    </Header>
                    <p className="text-center">
                    {questionCard.optionOne.text}
                    <br />
                    or...
                    </p>
                    <Link to={`/questions/${questionCard.id}`} className="btn btn-outline-info col-sm-12">View Poll</Link>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment.Group>
        );
    }
}

function mapStateToProps({ users }, props) {
  const user = users[props.userId];
  return {
    user
  };
}

export default connect(mapStateToProps)(UserCard);