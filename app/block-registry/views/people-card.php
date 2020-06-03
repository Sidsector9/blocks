<?php ob_start(); ?>
<div class="<?php echo esc_attr( $attributes['className'] ); ?>" style="background-color: <?php echo esc_attr( $attributes['backgroundColor'] ); ?>">
	<div class="nuk-pc__name"><?php echo wp_kses_post( $attributes['name'] ); ?></div>
	<div class="nuk-pc__info"><?php echo wp_kses_post( $attributes['info'] ); ?></div>
	<div class="nuk-pc__description"><?php echo wp_kses_post( $attributes['description'] ); ?></div>
</div>
<?php return ob_get_clean(); ?>
