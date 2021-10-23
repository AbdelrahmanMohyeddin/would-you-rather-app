import { Component } from 'react'
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react'
import './Home.css'
import Card from '../Card/Card'


class Home extends Component{
    render() {
        const { answeredQuestions,unAnsweredQuestions } = this.props;
        return(
            <div className="container">
                <div className="col-sm-12 col-md-5 mt-3 m-auto">
                    <Tab panes={panes({ answeredQuestions,unAnsweredQuestions })} className="tab" />
                </div>
            </div>
            
        )
    }
}

const panes = props => {
    const { answeredQuestions, unAnsweredQuestions } = props;
    return [
      {
        menuItem: 'Unanswered',
        render: () => (
          <Tab.Pane>
            {answeredQuestions.map(question => (
              <Card
                key={question.id}
                userId={question.author}
                questionCard={question}
                />
              
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Answered',
        render: () => (
          <Tab.Pane>
            {unAnsweredQuestions.map(question => (
                <Card
                key={question.id}
                userId={question.author}
                questionCard={question}
                />
            ))}
          </Tab.Pane>
        )
      }
    ];
  };

function mapStateToProps({authUser , users, questions}){
    const answeredQuestions = Object.values(questions)
        .filter(q => !Object.keys(users[authUser].answers).includes(q.id))
    const unAnsweredQuestions = Object.values(questions)
        .filter(q => Object.keys(users[authUser].answers).includes(q.id))
    return{
        answeredQuestions,
        unAnsweredQuestions
    }
}

export default connect(mapStateToProps)(Home);