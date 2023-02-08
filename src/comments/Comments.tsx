import React, {ChangeEvent, useDeferredValue, useEffect, useState, useTransition} from 'react';
import s from './Comments.module.scss'

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const filteredComments = (entities: IComment[], search: string): IComment[] =>
    entities.filter(el => el.name.concat(el.body).includes(search))

export const Comments = () => {

    // const [isPending, startTransition] = useTransition()
    const [comments, setComments] = useState<IComment[]>([])
    const [search, setSearch] = useState('')

    const value = useDeferredValue(filteredComments(comments, search))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments', {method: 'GET',})
            .then(res => res.json())
            .then(setComments)
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        // startTransition(() => setSearch(e.currentTarget.value))
        setSearch(e.currentTarget.value)
    }

    return (
        <div className={s.comments}>
            <input type='text' onChange={handleSearch} value={search}/>
            {/*{isPending && <span>Loading...</span>}*/}
            <ul>
                {value.map(({id, name, body}) =>
                    <li key={id}>
                        <h3>{name}</h3>
                        <span>{body}</span>
                    </li>)}
            </ul>
        </div>
    );
};
