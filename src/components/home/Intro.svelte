<script>
	import arrow from '../../resources/arrow.svg';
	export let loaded = false;
</script>


<div class='intro' class:loaded={loaded}>
	<div class='text-container'>
		<span class='code'>&lt;hi&gt;</span><span class='greeting'>I'm Stijn</span><span class='code'>&lt;/hi&gt;</span>
		<p class='sub'>
			I'm a software engineer<br />
			with a <span class='love'>&hearts;</span> for Java &amp; web
		</p>
	</div>
	<div class='image-container'>
		<div class='remark'>
			<p>Yep, that's me...<br />slow dancing with a laptop</p>
			<img src={arrow} alt='arrow'>
		</div>
		<div class='image'></div>
	</div>
</div>


<style>
    .intro {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-areas: " text-container image-container ";
        height: 100%;
        font-family: 'Poppins', sans-serif;
    }

    .intro .text-container {
        display: grid;
        grid-area: text-container;
        grid-template-columns: min-content min-content min-content;
        font-weight: 200;
        font-size: 5vw;
        white-space: nowrap;
        grid-auto-rows: min-content;
        align-self: end;
        margin-left: 8%;
        margin-bottom: 30%;
    }

    .intro .text-container {
        opacity: 0;
    }
		.intro.loaded .text-container {
        animation: fade-in 2s 200ms forwards;
		}

    .code {
        font-family: 'Source Code Pro', monospace;
        color: var(--green);
        font-weight: 200;
    }

    .sub {
        font-weight: 200;
        font-size: 2.5vw;
        grid-column: 2/4;
        margin: 0;
        line-height: 1.2;
    }

    .intro .image-container {
        grid-area: image-container;
        position: relative;
        z-index: 3;
        opacity: 0;
    }
		.intro.loaded .image-container {
        animation: fade-in 2s 400ms forwards;
		}

    .remark {
        position: absolute;
        top: 25%;
        right: 60%;
        font-size: 10pt;
        font-weight: 100;
    }

    .intro .image-container img {
        width: 20px;
        transform: scaleX(-100%) scaleY(-100%);
        position: relative;
        left: 60px;
        bottom: 10px;
    }

    .intro .image-container .image {
        background-image: url("../../resources/slow_dancing.jpg");
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        clip-path: polygon(100% 0, 60% 50%, 100% 100%, 70% 100%, 30% 50%, 70% 0); /* edit this with https://bennettfeely.com/clippy/ */
        animation: zoom-out 10s forwards;
    }

		.intro .love {
				color: var(--pink);
				display: inline-block;
				animation: 3s ease infinite beat;
		}

    @media (max-width: 800px) {
			.intro {
					height: 60vh;
			}
			.intro .image-container {
					height: 60vh;
          left: -130px;
			}
    }

    @media (min-width: 800px) {
        .intro {
            height: 100vh;
						max-height: 1000px;
        }
        .intro .image-container {
            height: 100vh;
            max-height: 1000px;
            left: -250px;
        }
    }

    @media (min-width: 1200px) {
        .intro {
            max-height: 2000px;
        }
        .intro .image-container {
            max-height: 2000px;
            left: 0;
        }
    }

		@media (max-width: 1200px) {
				.intro {
            grid-template-areas: " image-container text-container ";
						align-content: center;
				}

				.intro .image-container {
            position: absolute;
            top: 0;
            width: 100%;
            display: block;
				}

				.intro .text-container {
            margin-left: 0;
            margin-bottom: 0;
				}

				.remark {
						display: none;
				}

		}

    @media screen and (min-width: 1800px) {
        .intro .image-container .image {
            background-position: calc(50% + 100px) 50%;
        }
    }

		@media screen and (max-height: 600px) {
        .intro {
            height: 100vh;
        }

        .intro .image-container {
            height: 100vh;
        }

        .intro .image-container .image {
            background-position: calc(50% + 30px) calc(50% + 100px);
        }
		}

    @media print {
        .image-container {
            position: relative;
            top: 50%;
            margin-top: -10cm;
            height: 20cm;
            -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
            color-adjust: exact !important; /* Firefox 48 – 96 */
            print-color-adjust: exact !important;
        }
    }

    @keyframes zoom-out {
        0% {
            background-size: 110%;
        }
        50% {
            background-size: 103%;
        }
        100% {
            background-size: 100%;
        }
    }

    @keyframes beat {
        0%, 50%, 100% { transform: scale(1, 1); }
        30%, 80% { transform: scale(0.92, 0.95); }
    }
</style>
