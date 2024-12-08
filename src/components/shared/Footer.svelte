<script>
	import meAndTibo from '../../resources/me_and_tibo.png';
	import github from '../../resources/github.svg';
	import mail from '../../resources/mail.png';
	import linkedIn from '../../resources/linkedin.png';
</script>


<footer>
	<img src={meAndTibo} alt='Me and my son'>
	<div class='me'>
		<h1>Stijn Hooft</h1>
		<h2>Software engineer, specialized in Java and web technologies</h2>
	</div>
	<div class='contact'>
		<a class='mail' href='mailto:stijnhooft@hotmail.com'>
			<img src={mail} alt='Mail'>
		</a>
		<a class='linkedIn' href='https://www.linkedin.com/in/stijn-hooft-4a1295249/'>
			<img src={linkedIn} alt='LinkedIn'></a>
		<a class='github' href='https://github.com/stainii'>
			<img src={github} alt='Github'>
		</a>
	</div>
</footer>

<style>
		h1, h2 {
				margin-top: 0;
				margin-bottom: 0;
		}

    footer {
        background: var(--green);
        color: var(--darkgreen);

        display: grid;
        grid-template-columns: 250px minmax(0, 1fr) minmax(0, 1fr);
        padding: 50px 5%;
				margin-top: 100px;
    }

    footer img {
        width: 200px;
        margin: 5%;
    }

    footer .me {
        justify-self: left;
        align-self: center;
    }

    footer .me h1 {
        font-size: 12pt;
        font-weight: 300;
    }

    footer .me h2 {
        font-size: 10pt;
        font-weight: 200;
    }

    footer .contact {
        justify-self: end;
        align-self: center;
        width: 50px;
        display: grid;
    }

    footer .contact a {
        opacity: 0.8;
    }

    footer .contact a:hover, footer .contact a:active, footer .contact a:focus {
        opacity: 1;
    }

    footer .contact img {
        width: 55px;
        height: 55px;
        margin: 8px 0 8px 8px;
    }

    @media (max-width: 800px) {
        footer {
            grid-template-columns: 130px minmax(0, 1fr);
            padding: 20px 5%;
        }

        footer img {
            width: 100px;
        }

        footer .contact {
            width: 100%;
            grid-column: 1/3;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        }

        footer .contact .mail {
            justify-self: left;
        }

        footer .contact .linkedIn {
            justify-self: center;
        }

        footer .contact .github {
            justify-self: right;
        }
    }

    @media print {
        footer {
            display: none;
            height: 0;
        }
    }
</style>
