import React from "react";
import './index.scss'
export default function Home() {
    return (
        <div className="home">
            <main>
                <section className="post-form">
                    <h2>Créer un nouveau post</h2>
                    <form>
                        <textarea placeholder="Exprimez-vous..."></textarea>
                        <button type="submit">Publier</button>
                    </form>
                </section>
                <section className="posts">
                    <h2>Les derniers posts</h2>
                    <ul>
                        <li>
                            <h3>Titre du post 1</h3>
                            <p>Contenu du post 1</p>
                            <div className="meta">
                                <span className="author">Auteur du post 1</span>
                                <span className="date">Date du post 1</span>
                            </div>
                        </li>
                        <li>
                            <h3>Titre du post 2</h3>
                            <p>Contenu du post 2</p>
                            <div className="meta">
                                <span className="author">Auteur du post 2</span>
                                <span className="date">Date du post 2</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

