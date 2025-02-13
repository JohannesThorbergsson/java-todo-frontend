import React from "react";
import {TodoModel} from "../../model/TodoModel";
import Todo from "../ToDo/Todo";
import "../TodoBoard/Todoboard.css"
type statusboard ={
    "board-title": string,
    "todoList": TodoModel[]
    handleAdvanceButtonClick(todoAdvance: TodoModel): void
    handleSaveChange(newStatus: string, newDesc: string, id: string): void

}
export default function Statusboard(props: statusboard) {
    return (
        <section className={"statusboard"}>
            <h2>
                {props["board-title"]}
            </h2>
            <div>
            {props.todoList.length<1?
                <h2 className={"emptyBoard"}>Empty</h2>:
                props.todoList.map(t =><Todo todo={t} key={t.id}
                                             handleAdvanceButtonClick={props.handleAdvanceButtonClick}
                                             handleSaveChange={props.handleSaveChange}/>)}
            </div>
        </section>
    )

}