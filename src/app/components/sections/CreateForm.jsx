import React, { useState } from 'react';
import supabase from '../../../database/supabaseClient';

const CreateForm = ({ onCommentAdded }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [formError, setFormError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [rotation, setRotation] = useState(0); // Angle de rotation

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !comment) {
            setFormError('S\'il vous plaît, remplissez les deux champs');
            return;
        }

        // Generate the current date and time in ISO format
        const created_at = new Date().toISOString();

        const { data, error } = await supabase
            .from('comments')
            .insert([{ name, comment, created_at }]);

        if (error) {
            console.error(error);
            setFormError('Erreur lors de l\'ajout du commentaire');
        } else {
            setFormError(null);
            setName('');
            setComment('');
            console.log(data);
            if (onCommentAdded) {
                onCommentAdded();
            }
            setShowForm(false);
        }
    };

    const handleAddCommentClick = () => {
        setShowForm(!showForm); // Toggle form visibility
        setRotation((prevRotation) => prevRotation + 45);
    };

    return (
        <div className="relative">
            <div className='flex items-center gap-4 flex-wrap'>
                <svg
                    width={35}
                    height={35}
                    viewBox="0 0 54 54"
                    className='cursor-pointer svg-color'
                    onClick={handleAddCommentClick}
                    style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s' }} // Apply rotation and transition
                >
                    <circle cx="27" cy="27" r="26.5" fill="black" className='svg-color_s' />
                    <rect x="22.6799" y="14.04" width="8.1" height="25.92" fill="white" className='svg-color_f' />
                    <rect x="39.96" y="22.6799" width="8.1" height="25.92" transform="rotate(90 39.96 22.6799)" fill="white" className='svg-color_f' />
                </svg>
                {!showForm && (
                    <p>Ajouter votre commentaire ici</p>
                )}
            </div>
            {showForm && (
                <form className='flex flex-col mr-6 mt-10 gap-3' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Prénom / Surnom :</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Pierre Desproges'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="comment">Ton petit mot :</label>
                        <textarea
                            rows="7"
                            placeholder='"Les adultes ne sont que des enfants périmés."'
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button className='btn' type="submit"><span>Ajouter votre mot</span></button>
                    {formError && <p>{formError}</p>}
                </form>
            )}
        </div>
    );
};

export default CreateForm;
