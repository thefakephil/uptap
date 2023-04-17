// import useSWR from 'swr'


async function newUser() {
    await fetch('/api/createUser', {
        method: 'PUT',
    });
    }

export default function CreateUser() {
    return (
        <button onClick={() => newUser()}> Update User </button>
    )
}