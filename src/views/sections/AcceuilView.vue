<template>
    <section id="accueil">
        <img src="../../assets/kaydencats.webp" alt="kayden">
        <div class="post">
            <p>
            Bonjour,
            </p>
            <p>
                Je suis <span>Nassim</span>
            </p>
            <p>
                Développeur <span>Front-End</span>
            </p>
            <div class="school">
                <p>
                    Actuellement en recherche d'alternance.
                </p>
                <p>
                    Étudiant en Bachelor Développement fullstack & DevOps à IPSSI.(2023/2024)
                </p>
            </div>
        </div>
        <div class="go-down">
            <router-link to="/apropos"  @click="goToSection('apropos')" aria-label="apropos">
                <span class="box">
                    <span class="point"></span>
                </span>
            </router-link>
            <p>
                Go Down
            </p>
        </div>
    </section>
</template>

<script setup>
const goToSection = ((section) => {
    const aSection = document.getElementById(section)
    aSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
});
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 100px;
    font-size: 30px;
    position: relative;
    padding: 50px 80px 20px;

    .left{
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        span{
            color: var(--green);
        }

        .school{
            font-size: 24px;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        } 
    }

    img{
        width: 450px;
        height: 200px;
        object-fit: contain;
        margin-top: -150px;
    }
    .go-down{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
        position: absolute;
        bottom: 20px;

        .box{
            width: 1.5rem;
            height: 3rem;
            border: 2px solid var(--white);
            border-radius: 20px;
            opacity: 0.7;
            display: flex;
            justify-content: center;
            padding-top: 8px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;

            &:hover{
                transform: scale(1.1);
            }

            .point{
                width: 0.5rem;
                height: 0.5rem;
                border: 1px solid var(--white);
                border-radius: 50%;
                background-color: var(--white);
                animation: go-down 1.3s infinite;
            }
        }

        p{
            font-size: 20px;
        }
    }
    @keyframes go-down {
        0%{
            transform: translateY(0);
            opacity: 1;
        }

        100%{
            transform: translateY(15px);
            opacity: 0;
        }
    }
}


@media screen and (max-width: 768px) {
    section{
        padding: 100px 30px 20px;

        img{
            max-width: 300px;
        }

        .post{
            font-size: 20px;

            .school{
                font-size: 18px;
            }
        }
    }
}
</style>