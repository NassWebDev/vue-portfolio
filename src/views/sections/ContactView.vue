<template>
    <section id="contact">
        <div>
            <h1>
                Me contacter
            </h1>
            <div class="contact">
                <p>
                    Recherchant actuellement un contrat d'apprentissage pour un poste de développeur Front-End, ma boîte de réception est ouverte. Si vous avez une question ou souhaitez m'offrir une opportunité, n'hésitez pas, je ferais de mon mieux pour vous répondre.
                </p>
                <a href="mailto:mr.nedjar.nassim@gmail.com">
                    Contactez-moi !!!
                </a>
                <img src="../../assets/kaydensmile.webp" alt="kayden">
            </div>
        </div>
        <footer>
            Fait par Nassim.
        </footer>
    </section>
</template>

<style lang="scss" scoped>
section{
    min-height: 100vh;
    padding: 50px 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    row-gap: 40px;

    h1{
        color: var(--green);
    }

    .contact{
        padding: 50px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 50px;

        p{
            font-size: 18px;
        }

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: 60px;
            border: 1px solid transparent;
            border-radius: 2px;
            background-color: var(--dark-blue);
            cursor: pointer;
            font-size: 15px;
            text-decoration: none;
            color: var(--white);
            transition: transform 0.2s ease-in-out;
            will-change: transform;

            &:hover{
                transform: scale(1.1);
            }
        }

        img{
            width: 200px;
        }
    }

    footer{
        width: 100%;
        text-align: center;
        padding-top: 10px;
        border-top: 1px solid var(--white);
    }
}

@media screen and (max-width: 768px) {
    section{
        padding: 50px 30px 20px;

        .contact{
            padding: 50px 5px 0   ;
        }
    }
}
</style>