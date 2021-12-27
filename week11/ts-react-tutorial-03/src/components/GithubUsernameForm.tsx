import React, { FormEvent, useState, ChangeEvent } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="GithubUsernameForm">
            <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
            <button type="submit">조회</button>
        </form>
    );
}

export default GithubUsernameForm;