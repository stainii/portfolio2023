<script>
	import { afterUpdate } from 'svelte';
	import { beforeNavigate } from '$app/navigation';

	export let contentsNode;

	let uniqueId = (Math.random() + 1).toString(36).substring(7);
	let nodes = [];
	let scrollY = 0;
	let innerHeight = 0;
	let componentActive = true;

	$: treshold = innerHeight * 0.30;
	$: middleOfScreen = scrollY + treshold;
	$: nodeInScrollView = nodes.filter(node => node.position <= middleOfScreen)
		.reduce((n1, n2) => n1 && n1.position >= n2.position ? n1 : n2, undefined);
	$: nextNode = nodes[nodes.indexOf(nodeInScrollView) + 1];
	$: distanceToNextNodeInPercentage = !nodeInScrollView || !nextNode ? 0 : Math.max(100 - ((nextNode.position - middleOfScreen) / (nextNode.position - nodeInScrollView.position) * 100), 0);

	const shouldFocusMainNode = (node) => nodeInScrollView === node && distanceToNextNodeInPercentage < 33;
	const shouldFocusFirstSubNode = (node) => nodeInScrollView === node && distanceToNextNodeInPercentage >= 33 && distanceToNextNodeInPercentage < 66;
	const shouldFocusSecondSubNode = (node) => nodeInScrollView === node && distanceToNextNodeInPercentage >= 66;

	const scrollPageTo = (position) => {
		window.scroll({
			top: position - treshold + 10,
			behavior: 'smooth'
		});
	};

	const scrollNodeIntoViewOfTableOfContents = () => {
		let parentElement = document.getElementById(uniqueId);
		let node = document.querySelector('.main-node-or-its-sub-nodes-in-focus');
		if (parentElement && node) {
			const parentRect = parentElement.getBoundingClientRect();
			const parentHeight = parentRect.height;

			const subRect = node.getBoundingClientRect();
			const subHeight = subRect.height;
			const subTopRelativeToParent = subRect.top - parentRect.top;

			const scrollTo = subTopRelativeToParent - (parentHeight / 2) + (subHeight / 2);

			parentElement.scrollTo({
				top: parentElement.scrollTop + scrollTo,
				behavior: 'smooth'
			});
		}

		return true;
	};

	const recalculateTableOfContentsNodes = () => {
		if (!componentActive) {
			return;
		}

		nodes = [...document.querySelectorAll(contentsNode)]
			.map(header => {
				return {
					name: header.textContent,
					position: header.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop
				};
			});
	};

	afterUpdate(async () => {
		recalculateTableOfContentsNodes();
	});

	beforeNavigate(() => {
		componentActive = false;
	});
</script>

<svelte:window bind:scrollY bind:innerHeight on:resize={recalculateTableOfContentsNodes}
							 on:scroll={scrollNodeIntoViewOfTableOfContents} />

{#if nodes.length > 0}
	<div class='toc' id={uniqueId}>
		{#each nodes as node, i}
			<div class='main node'
					 class:focus={shouldFocusMainNode(node)}
					 class:before-focus={shouldFocusFirstSubNode(node)}
					 class:main-node-or-its-sub-nodes-in-focus={node === nodeInScrollView}
					 on:click={scrollPageTo(node.position)}
					 on:keydown={scrollPageTo(node.position)}>
				{node.name}
			</div>
			{#if i < nodes.length - 1}
				<div class='sub node'
						 class:focus={shouldFocusFirstSubNode(node)}
						 class:before-focus={shouldFocusSecondSubNode(node)}
						 on:click={scrollPageTo(node.position + (nodes[nodes.indexOf(node) + 1]?.position - node.position) * 0.33)}
						 on:keydown={scrollPageTo(node.position + (nodes[nodes.indexOf(node) + 1]?.position - node.position) * 0.33)}>
				</div>
				<div class='sub node'
						 class:focus={shouldFocusSecondSubNode(node)}
						 class:before-focus={shouldFocusMainNode(nodes[i+1])}
						 on:click={scrollPageTo(node.position + (nodes[nodes.indexOf(node) + 1]?.position - node.position) * 0.66)}
						 on:keydown={scrollPageTo(node.position + (nodes[nodes.indexOf(node) + 1]?.position - node.position) * 0.66)}>
				</div>
			{/if}
		{/each}
	</div>
{/if}

<style>
    .toc {
        position: sticky;
        position: -webkit-sticky;
        top: 20%;
        height: 70dvh;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .toc::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .node {
        transition: all 200ms;
        cursor: pointer;
        display: block;
        min-height: 1.5rem;
        padding-left: 20px;
        max-width: 70%; /* when the scale goes up 30% when focused, it should still be contained in the menu. */
    }

    .node::before {
        content: '-';
        display: inline-block;
        width: 15px;
        height: 15px;
        color: var(--green);
        margin-right: 18px;
        left: 0;
        position: absolute;
    }

    .node.focus::before {
        margin-right: 8px;
        font-weight: bold;
    }

    .node.focus, .node.focus + .node, .node.before-focus {
        transform: scale(105%);
        transform-origin: left;
    }

    .main.node.main-node-or-its-sub-nodes-in-focus {
        font-weight: bold;
    }

    .node.focus {
        transform: scale(115%);
        transform-origin: left;
    }
</style>
