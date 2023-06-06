# Reproducer project

```
composer install
symfony serve
```

Then go to https://127.0.0.1:8000. The div below the `<hr>` has its content
added thanks to a ``stimulus_controller()``. You can click the button to add
more content.

When you change the box on top, the entire component reloads. Notice that the
custom content from the ``stimulus_controller()`` element remains and doesn't
change.
