<?php include "header.php"; ?>


<div class="section-wrapper container contacts-wrapper">
    <div class="section-heading">
        <h2 class="page-title">Contatti</h2>
        <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    </div>
    <div class="contacts-main-content">
        <div class="artical-section">
            <div class="contacts-image-container">
                <img src="./assets/img/contacts-pic1.png" alt="restaurant" />
            </div>
            <div class="artical-content">
                <h3>Nome dell’Attività</h3>
                <p> <span class="iconify" data-icon="carbon:phone-filled"></span><a href="#"> (+39) 02 6312 3456 </a>
                </p>
                <p> <span class="iconify" data-icon="entypo:mail"></span><a href="#"> info@domain.it </a></p>
                <p><span class="iconify" data-icon="eva:pin-fill"></span><a href="#"> Corso Como, 2, 20154 Milano
                        MI154 Milano MI </a></p>
            </div>
        </div>
        <div class="artical-section">
            <div class="artical-content">
                <h3>Nome dell’Attività</h3>
                <p> <span class="iconify" data-icon="carbon:phone-filled"></span><a href="#"> (+39) 02 6312 3456 </a>
                </p>
                <p> <span class="iconify" data-icon="entypo:mail"></span><a href="#"> info@domain.it </a></p>
                <p><span class="iconify" data-icon="eva:pin-fill"></span><a href="#"> Corso Como, 2, 20154 Milano
                        MI154 Milano MI </a></p>
            </div>
            <div class="contacts-image-container">
                <img src="./assets/img/contacts-pic2.png" alt="railway" />
            </div>
        </div>
        <div class="artical-section">
            <div class="contacts-image-container">
                <img src="./assets/img/contacts-pic3.png" alt="restaurant" />
            </div>
            <div class="artical-content">
                <h3>Nome dell’Attività</h3>
                <p> <span class="iconify" data-icon="carbon:phone-filled"></span><a href="#"> (+39) 02 6312 3456 </a>
                </p>
                <p> <span class="iconify" data-icon="entypo:mail"></span><a href="#"> info@domain.it </a></p>
                <p><span class="iconify" data-icon="eva:pin-fill"></span><a href="#"> Corso Como, 2, 20154 Milano
                        MI154 Milano MI </a></p>
            </div>
        </div>
    </div>
</div>
<div class="container">

    <h2 class="section-title">Seleziona La Destinazione Più Vicina</h2>

    <div class="row px-4 px-sm-0 ">
        <div class="map-wrapper">
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?q=5G%20Store%20Busto%20Arsizio%2C%20Via%20Daniele%20Crespi%2C%202%2C%2021052%20Busto%20Arsizio%20VA&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                title="5G Store Busto Arsizio, Via Daniele Crespi, 2, 21052 Busto Arsizio VA"
                aria-label="5G Store Busto Arsizio, Via Daniele Crespi, 2, 21052 Busto Arsizio VA"></iframe>
        </div>

    </div>

    <div class="contacts-comment-insert ">
        <div class="row contact-now px-4 px-sm-0">
            <button class="action button contact-now-button">
                Contattaci ORA
            </button>

            <button class="action-button contact-now-button">
                <span>Avvia una chat</span> <span class="iconify button-icon" data-icon="bi:chat-dots-fill"></span>
            </button>
        </div>
        <h3 class="heading-form">Oppure</h3>
        <p class="text-form">Compila il modulo sottostante, ti risponderemo il prima possibile</p>
        <form class="form">
            <div class="form-input-wrapper">
                <input type="text" class="form-input" placeholder="Nome*" required />
                <input type="text" class="form-input" placeholder="Cognome*" required />
                <input type="text" class="form-input" placeholder="Email*" required />
            </div>
            <textarea class="form-text-area" placeholder="Messaggio..."></textarea>

            <div class="form-checkbox-wrapper">
                <input type="checkbox" id="check" class="form-checkbox" /> <label for="check">Acconsento al trattamento
                    dei miei dati personali secondo le vigenti normative in relazione al GDPR</label>
            </div>
            <button class="send-button"> Invia </button>
        </form>
    </div>
</div>
<?php include "footer.php"; ?>