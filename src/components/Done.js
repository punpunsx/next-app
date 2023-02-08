export default function Done({ todos }) {
    let i = 1;//index    
    
    const display = () => {    
        if (todos.length === 0) {
            return <h1 className="font-bold text-2xl">No task done</h1>
        }
        else {
            return todos.map((todo, index) => {
                if (todo.isDone === true) {                                        
                    return (
                        <li className="text-lg pt-5 flex" key={index}>
                            <div className="grow">
                                <div className="font-bold">{i++}: {todo.title}</div>
                                <div>{todo.description}</div>
                            </div>
                            <div>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" className="w-7 h-7 bg-green-500 p-1 rounded-md" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                                </svg>
                            </div>
                        </li>
                    )
                }
            })
        }
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold">Done Task:
                    </div>
                </div>
                <ul>
                    {

                        display()

                    }

                </ul>
            </div>
        </div>
    )
}