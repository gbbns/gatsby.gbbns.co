import React from 'react'

export const Footer = () => {
	const copyrightYear = new Date().getFullYear();
	return (
		<footer class="c-footer">
			<div class="card card--message">
				<h4>As you've probably spotted I'm designing &amp; building this site "live" and iteratively.</h4>
				<p>Im the true sprit of Agile, I believe that coding in the open promotes sharing, enables better and faster feedback and provides a great opportunity for learning.</p>
				<p>Because of this things will inevitably change and possibly break but that's more than ok, you can <a href="mailto:chris@gbbns.co" rel="noopener">email me to let me know</a> if you spot anything.</p>
				<p>In the meantime feel free to browse <a href="https://github.com/gbbns/gatsby.gbbns.co" rel="noopener">the source code</a> and <a href="https://github.com/gbbns/gatsby.gbbns.co/commits/master" rel="noopener">commit history</a>, and if you like <a href="https://github.com/gbbns/gatsby.gbbns.co/issues" rel="noopener">raise an issue</a>!</p>
			</div>

			<p><a href="mailto:chris@gbbns.co" rel="noopener">chris@gbbns.co</a></p>

			<nav>
				<ul class="h-list">
					<li class="h-list__item">
						<a href="/colophon">Colophon</a>
					</li>
					<li class="h-list__item">
						<a href="/now">Now</a>
					</li>
					<li class="h-list__item">
						<a href="/uses">Uses</a>
					</li>
					<li class="h-list__item">
						<a href="/tags">Tags</a>
					</li>
				</ul>
			</nav>

			<ul class="h-list ">
				<li class="h-list__item">
					<a href="https://github.com/gbbns" rel="noopener">GitHub</a>
				</li>
				<li class="h-list__item">
					<a href="https://www.instagram.com/_gbbns" rel="noopener">Instagram</a>
				</li>
				<li class="h-list__item">
					<a href="https://twitter.com/_gbbns" rel="noopener">Twitter</a>
				</li>
				<li class="h-list__item">
					<a href="https://uk.linkedin.com/in/gbbns" rel="noopener">LinkedIn</a>
				</li>
				<li class="h-list__item">
					<a href="https://500px.com/gbbns" rel="noopener">500px</a>
				</li>
			</ul>

			<p>Copyright &copy; {copyrightYear} Chris Gibbons - All rights reserved.</p>
		</footer>);
}

