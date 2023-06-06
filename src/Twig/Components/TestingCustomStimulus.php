<?php

namespace App\Twig\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent()]
final class TestingCustomStimulus
{
    use DefaultActionTrait;

    public int $counter = 0;
}
