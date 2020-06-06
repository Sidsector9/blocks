<?php ob_start(); ?>
<div class="wp-block-nuk-int-accordion-item">
	<div class="nuk-acc-item__wrapper">
		<div class="nuk-acc-item__text">
			<div class="nuk-acc-item__heading-wrapper">
				<div class="nuk-acc-item__heading">
					<?php echo wp_kses_post( $attributes['heading'] ); ?>
				</div>
				<div class="nuk-acc-item__arrow">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8"><path fill="#069" fill-rule="evenodd" d="M13.119 1.23L6.594 4.594.127.775.09 1.797 6.435 8l6.648-5.75z"/></svg>
				</div>
			</div>
			<div class="nuk-acc-item__description">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		</div>
	</div>
</div>
<?php return ob_get_clean(); ?>
