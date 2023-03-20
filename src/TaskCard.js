/* eslint-disable jsx-a11y/img-redundant-alt */
import './TaskCard.css';

export default function TaskCard({task}){
    if (Object.keys(task).length !== 0){
        return(
            <div className="tasks" key={task.id}>
                <img src={task.image_URL} alt={task.title}/>
                <div className="text">
                    <p className="title-budget">
                        <span>{task.title}</span>
                        <span>${task.budget}</span>
                    </p>
                    <ol>
                        <li className="location">{task.locality}, {task.state}</li>
                        <li className="due-date">{task.due_date.toString().split(' ')[0]},&nbsp;{task.due_date.toString().split(' ')[2]}&nbsp;
                        {task.due_date.toString().split(' ')[1]}</li>
                        <li className="time-of-day">{task.time_of_day.join(', ')}</li>
                    </ol>
                    <div className="profile-offers">
                        <div className="profile">
                            <img src={task.create_user_img_url} alt="Poster profile photo"/>
                        </div>
                        <div className="poster-name">{task.create_user_firstname}&nbsp;{task.create_user_lastname[0]}.</div>
                        <div className="offers">{task.Status}&nbsp;&bull;&nbsp;{task.offers.length}&nbsp;{task.offers.length > 1 ? 'offers' : 'offer'}</div>
                    </div>
                </div>
            </div>
        );
    }
}