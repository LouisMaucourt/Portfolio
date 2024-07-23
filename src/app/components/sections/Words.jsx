'use client';
import supabase from '../../../database/supabaseClient';
import CreateForm from '../sections/CreateForm';
import { useState, useEffect } from 'react';

const Words = () => {
    const [fetchError, setFetchError] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase.from('comments').select();

            if (error) {
                throw new Error("Fetch de comments n'a pas marché");
            }

            setComments(data);
            setFetchError(null);
        } catch (error) {
            console.error(error);
            setFetchError("Fetch de comments n'a pas marché");
            setComments(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <section className='border-color border-r px-8 py-24'>
            <h2 className="lg:px-0">Exprimez-Vous Ici </h2>

            <div className='flex flex-row lg:flex-col py-24 px-10 gap-10'>
                <div className='w-1/4 lg:w-full border-color border-r lg:border-r-0'>
                    <CreateForm onCommentAdded={fetchComments} />
                </div>
                <div className='w-full flex flex-row flex-wrap gap-10 lg:gap-4'>
                    {loading ? (
                        <div className="w-full flex justify-center items-center">
                            <div className="loader"></div> {/* Loader ici */}
                        </div>
                    ) : fetchError ? (
                        <p>{fetchError}</p>
                    ) : comments && comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div className="border-color border w-80 lg:w-full p-4 flex flex-col gap-8 justify-between" key={index}>
                                <p>{comment.comment}</p>
                                <div className='flex flex-row justify-between'>
                                    <p>{comment.name}</p>
                                    <p>{comment.created_at}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full flex justify-center items-center">
                            <p>Ajouter votre message</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .loader {
                    border: 8px solid #f3f3f3; /* Light grey */
                    border-radius: 50%;
                    border-top: 8px solid #3498db; /* Blue */
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Words;
